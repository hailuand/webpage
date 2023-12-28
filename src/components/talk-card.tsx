import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle,
  } from "./ui/card";
  import { Badge } from "./ui/badge";
  
  interface Props {
    title: string;
    description: string;
    topics: readonly string[];
    link?: string;
  }
  
  export function TalkCard({ title, description, topics, link }: Props) {
    return (
      <Card className="flex flex-col overflow-hidden border border-muted p-3">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {title}{" "}
                </a>
              ) : (
                title
              )}
            </CardTitle>
            <div className="hidden font-mono text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <CardDescription className="font-mono text-xs">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            {topics.map((topic) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={topic}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }