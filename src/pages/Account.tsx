
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Account = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-serif mb-8">My Account</h1>
        
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-medium mb-1">John Doe</h2>
              <p className="text-fashion-500">john.doe@example.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Doe" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
            </div>
            <Button>Update Profile</Button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-medium mb-4">Order History</h3>
          <div className="text-fashion-500 text-center py-8">
            No orders yet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
