import rmlogo from "@/assets/rmlogo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <Card className="text-center rounded-none border-none ">
      <CardHeader>
        <CardTitle>&copy; {getYear()} rin meng</CardTitle>
        <CardDescription className="text-lg"></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm flex items-center justify-center space-x-2">
          <p>Made with ❤️ by</p>
          <span>
            <a
              href="https://github.com/rinmeng"
              target="_blank"
              rel="noreferrer"
            >
              <img src={rmlogo} alt="rmlogo" className="w-16 h-auto mx-1" />
            </a>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
