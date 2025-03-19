
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { User } from "lucide-react";

const UserMenu = () => {
  const { user, signOut } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {user ? (
          <>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuItem className="text-sm">{user.email}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              Log out
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem asChild>
            <a href="/auth">Sign in</a>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
