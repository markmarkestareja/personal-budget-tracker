
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Home() {
  

  return (
    <Card>
      <div>
        <div>
          {/* SVG */}
        </div>
        <div>
          <CardHeader>
            <CardTitle>Current Period</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Apr 16 - Apr 30, 2026</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
