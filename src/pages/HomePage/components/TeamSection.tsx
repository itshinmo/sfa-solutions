import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks";
import { cn } from "@/utils";
import { Button } from "@base-ui/react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

type TeamCardProps = {
  name: string;
  title: string;
  description?: string;
  media?: {
    email?: string;
    linkedin?: string;
    website?: string;
  };
};

const TeamCard = (props: TeamCardProps) => {
  const { description, title, name, media } = props;

  return (
    <Card className="h-[16.875rem] w-64 shrink-0">
      <CardContent className="relative flex h-full flex-col items-center text-center">
        {media && (
          <div className="absolute top-0 right-4 flex flex-col gap-y-2">
            {media.linkedin && (
              <Button onClick={() => window.open(media.linkedin, "_blank")}>
                <FaLinkedin className="fill-ring size-6 cursor-pointer hover:fill-[#126ac4]" />
              </Button>
            )}

            {media.email && (
              <Button
                onClick={() => {
                  window.location.href = `mailto:${media.email}`;
                }}
              >
                <IoIosMail className="fill-ring size-6 cursor-pointer hover:fill-[#dd4234]" />
              </Button>
            )}

            {media.website && (
              <Button onClick={() => window.open(media.website, "_blank")}>
                <AiOutlineGlobal className="fill-ring hover:fill-foreground size-6 cursor-pointer" />
              </Button>
            )}
          </div>
        )}

        <div className="border-primary mb-4 size-24 rounded-full border-2 bg-white" />

        <h5 className="h4 mb-2">{name}</h5>

        <span className="text-primary mb-1 font-semibold">{title}</span>

        {description && <p className="text-description">{description}</p>}
      </CardContent>
    </Card>
  );
};

const teamMembers: TeamCardProps[] = [
  {
    name: "Mahdi Sarai Tabrizi",
    title: "Project Manager",
    description: "Hydroinformatics specialist in irrigation and drainage",
  },
  {
    name: "Arash Tafteh",
    title: "Senior Specialist in Agricultural & Water Resource Systems",
    description: "Consultant in hydrological modeling & production functions",
  },
  {
    name: "Hossein Moradi Sizkouhi",
    title: "Lead Software Developer",
    description: "Solution architect and engineering lead",
  },
  {
    name: "Mohsen Shamsitabar",
    title: "Web Developer",
    description: "Scalable component developer for modern web experiences",
    media: {
      email: "test@test.com",
      website: "https://example.com",
      linkedin: "asd",
    },
  },
  {
    name: "Kamyar Nakhaie Khoonikie",
    title: "AI & Machine Learning Developer",
    description: "Advance ML model designer & deployer",
  },
  {
    name: "Soheil Mehrizi",
    title: "AI & Machine Learning Developer",
    description: "Data analyst and deep learning engineer",
  },
  {
    name: "Farhad Saeidinejad",
    title: "DevOps Engineer",
    description: "Deployment & cloud infrastructure manager",
  },
];

type TeamSectionProps = {
  className?: string;
};

export const TeamSection = ({ className }: TeamSectionProps) => {
  const isMobile = useIsMobile();

  return (
    <section
      className={cn(
        "maincontainer flex w-full flex-col items-center overflow-hidden",
        className,
      )}
    >
      <h2 className="h1 mb-12">The SFA Team</h2>

      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-linear-to-r to-transparent" />

        {/* Right Fade */}
        <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-linear-to-l to-transparent" />

        <div className="animate-team-scroll hover:paused my-1 flex w-max gap-4">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <TeamCard
              key={index}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
