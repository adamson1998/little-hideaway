import { useState, useEffect } from "react";
import { CalendarCheck, CalendarX, Users, Baby, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { siteConfig, rooms } from "@/config/site";

const BookingSearchBar = () => {
  const [checkIn, setCheckIn] = useState<Date>(() => new Date());
  const [checkOut, setCheckOut] = useState<Date>(() => addDays(new Date(), 1));
  // Helper to get local start-of-day (midnight) to avoid timezone offsets
  const getLocalToday = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  };
  const [userChangedCheckIn, setUserChangedCheckIn] = useState<boolean>(false);
  const [userChangedCheckOut, setUserChangedCheckOut] = useState<boolean>(false);
  const [adults, setAdults] = useState<string>("2");
  const [children, setChildren] = useState<string>("0");
  const [room, setRoom] = useState<string>("");

  // Update check-out if check-in is changed to be after check-out
  useEffect(() => {
    if (checkIn && checkOut && checkIn >= checkOut) {
      setCheckOut(addDays(checkIn, 1));
    }
  }, [checkIn]);

  const handleCheckAvailability = () => {
    // Build query params for booking URL
    const params = new URLSearchParams();
    if (checkIn) params.set("checkin", format(checkIn, "yyyy-MM-dd"));
    if (checkOut) params.set("checkout", format(checkOut, "yyyy-MM-dd"));
    if (adults) params.set("adults", adults);
    if (children) params.set("children", children);
    if (room) params.set("room", room);

    const bookingUrl = params.toString()
      ? `${siteConfig.bookingUrl}?${params.toString()}`
      : siteConfig.bookingUrl;

    window.open(bookingUrl, "_blank");
  };

  // Auto-update check-in/check-out at local midnight (and every 24h after)
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const updateToToday = () => {
      const today = getLocalToday();
      const tomorrow = addDays(today, 1);
      if (!userChangedCheckIn) setCheckIn(today);
      if (!userChangedCheckOut) setCheckOut(tomorrow);
    };

    const schedule = () => {
      const now = new Date();
      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const msUntilMidnight = nextMidnight.getTime() - now.getTime();

      timeoutId = setTimeout(() => {
        updateToToday();
        intervalId = setInterval(updateToToday, 24 * 60 * 60 * 1000);
      }, msUntilMidnight);
    };

    schedule();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [userChangedCheckIn, userChangedCheckOut]);

  // Ensure dates reflect the client's current date after hydration
  useEffect(() => {
    const today = getLocalToday();
    const tomorrow = addDays(today, 1);
    if (!userChangedCheckIn) setCheckIn(today);
    if (!userChangedCheckOut) setCheckOut(tomorrow);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:static w-full bg-background sm:rounded-lg p-2 sm:p-4 md:p-6 z-50 booking-bar-shadow">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 items-end">
        {/* Check In Date */}
        <div className="space-y-1 sm:space-y-2">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
            <CalendarCheck size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Check In Date</span>
            <span className="sm:hidden">Check In</span>
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal h-10 sm:h-12 pr-2 hover:bg-background hover:border-input hover:text-foreground text-xs sm:text-sm",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <span className="truncate">{checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}</span>
                <Calendar size={16} className="ml-1 sm:ml-2 flex-shrink-0 text-muted-foreground hover:text-green-500 transition-colors cursor-pointer" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  if (date) {
                    setCheckIn(date);
                    setUserChangedCheckIn(true);
                  }
                }}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                defaultMonth={checkIn}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check Out Date */}
        <div className="space-y-1 sm:space-y-2">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
            <CalendarX size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Check Out Date</span>
            <span className="sm:hidden">Check Out</span>
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal h-10 sm:h-12 pr-2 hover:bg-background hover:border-input hover:text-foreground text-xs sm:text-sm",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <span className="truncate">{checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}</span>
                <Calendar size={16} className="ml-1 sm:ml-2 flex-shrink-0 text-muted-foreground hover:text-green-500 transition-colors cursor-pointer" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkOut}
                onSelect={(date) => {
                  if (date) {
                    setCheckOut(date);
                    setUserChangedCheckOut(true);
                  }
                }}
                disabled={(date) => date <= (checkIn || new Date())}
                defaultMonth={checkOut}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Adults */}
        <div className="space-y-1 sm:space-y-2">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
            <Users size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Adults</span>
            <span className="sm:hidden">Adult</span>
          </label>
          <Select value={adults} onValueChange={setAdults}>
            <SelectTrigger className="h-10 sm:h-12 text-xs sm:text-sm">
              <SelectValue placeholder="Adults" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Adult" : "Adults"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Children */}
        <div className="space-y-1 sm:space-y-2">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
            <Baby size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Child</span>
            <span className="sm:hidden">Kid</span>
          </label>
          <Select value={children} onValueChange={setChildren}>
            <SelectTrigger className="h-10 sm:h-12 text-xs sm:text-sm">
              <SelectValue placeholder="Child" />
            </SelectTrigger>
            <SelectContent>
              {[0, 1, 2, 3, 4].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Child" : "Children"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Room */}
        <div className="space-y-1 sm:space-y-2">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
            <Home size={14} className="sm:w-4 sm:h-4" />
            Room
          </label>
          <Select value={room} onValueChange={setRoom}>
            <SelectTrigger className="h-10 sm:h-12 text-xs sm:text-sm">
              <SelectValue placeholder="Room" />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((r) => (
                <SelectItem key={r.id} value={r.id}>
                  {r.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Check Availability Button */}
        <div className="space-y-1 sm:space-y-2">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-transparent">
            <Calendar size={14} className="sm:w-4 sm:h-4" />
            Action
          </label>
          <Button
            variant="booking"
            className="w-full h-10 sm:h-12 uppercase tracking-wider font-semibold text-xs sm:text-sm"
            onClick={handleCheckAvailability}
          >
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export { BookingSearchBar };
