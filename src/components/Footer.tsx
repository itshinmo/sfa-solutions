import { TeamIcon } from "@/components/TeamIcon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks";
import { cn } from "@/utils";
import type { JSX } from "react";
import { FaCopyright, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLink } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";

type FooterButtonProps = {
  icon: JSX.Element;
};

const FooterButton = (props: FooterButtonProps) => {
  const { icon } = props;

  return (
    <Button
      className="bg-footer-icon-background!"
      size="icon-lg"
    >
      {icon}
    </Button>
  );
};

type FooterInfoProps = {
  icon: JSX.Element;
  title: string;
};

const FooterInfo = (props: FooterInfoProps) => {
  const { icon, title } = props;

  return (
    <div className="flex flex-row items-center gap-x-2">
      {icon}
      <span className="p m-0! text-sm font-medium">{title}</span>
    </div>
  );
};

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-footer-background text-footer-foreground px-5 py-10">
      <div
        className={cn(
          "flex justify-between",
          isMobile ? "flex-col gap-y-12" : "flex-row",
        )}
      >
        <section className="flex w-full flex-col gap-y-4">
          <div className="flex flex-row items-center gap-x-3">
            <div className="border-primary overflow-hidden rounded-xl border-2">
              <TeamIcon className="size-8" />
            </div>
            <h4 className="h4 text-white">Smart Farm Aqua</h4>
          </div>

          <p className="p m-0! text-sm font-medium">
            SFA: Intelligence in every drop.
          </p>

          <div className="flex flex-row items-center gap-x-2.5">
            <FooterButton
              icon={<FaFacebook className="fill-footer-icon-foreground" />}
            />

            <FooterButton
              icon={<MdPeopleAlt className="fill-footer-icon-foreground" />}
            />

            <FooterButton
              icon={<IoLink className="stroke-footer-icon-foreground" />}
            />

            <FooterButton
              icon={<IoMdMail className="fill-footer-icon-foreground" />}
            />
          </div>
        </section>

        <section className="flex w-full flex-col gap-y-4">
          <h4 className="h4 text-white">Contact info</h4>

          <div className="flex flex-col gap-y-2">
            <FooterInfo
              icon={<FaLocationDot className="fill-primary" />}
              title="Tehran, Iran"
            />

            <FooterInfo
              icon={<IoMdMail className="fill-primary" />}
              title="info@sfa.com"
            />

            <FooterInfo
              icon={<IoCall className="fill-primary" />}
              title="+98"
            />

            <FooterInfo
              icon={<LuClock className="stroke-primary" />}
              title="Sat - Wed: 9:00 - 17:00"
            />
          </div>
        </section>
      </div>

      <Separator
        orientation="horizontal"
        className="bg-footer-icon-background mt-16 mb-8 h-px"
      />

      <div className="mb-12 flex w-full flex-row items-center justify-center gap-x-2 text-center text-sm brightness-60">
        <FaCopyright />

        <span className="p m-0!">
          2026 Smart Farm Aqua team. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
