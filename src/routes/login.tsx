import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/jata_negara.png";
import background from "../assets/anti.jpg";
export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        // backgroundColor: "#f3f4f6",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[400px] space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img
            src={logo}
            alt="Malaysian Coat of Arms"
            width={120}
            height={120}
            className="mb-2"
          />
          <h1 className="text-2xl font-semibold text-center">SISTEM e-TAGS</h1>
          {/* <Button
            variant="secondary"
            className="bg-indigo-900 text-white hover:bg-indigo-800"
          >
            View Proposal
          </Button> */}
        </div>

        <Card className="w-full">
          <CardHeader className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">
              Please sign-in to your account
            </p>
            <p className="text-sm text-muted-foreground">
              Please Login using existing registered account
            </p>
            <Link to="/" className="text-sm text-primary hover:underline">
              See Demo User
            </Link>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="living@yopmail.com"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">Kata Laluan</Label>
                  <Link to="/" className="text-sm text-primary hover:underline">
                    Lupa Kata Laluan?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                {/* <Checkbox id="remember" /> */}
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember Me
                </Label>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Log Masuk
              </Button>
              <div className="text-center space-y-2">
                <div className="text-sm text-muted-foreground">or</div>
                <div className="text-sm">
                  Tiada Akaun?{" "}
                  <Link to="/" className="text-primary hover:underline">
                    Daftar Akaun
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
