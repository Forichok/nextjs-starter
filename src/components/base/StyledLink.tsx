import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ElementProps, StandardLink } from "./StyledComponents";
import React from "react";
import { doScrolling } from "@/common/utils";

const StyledLink = (props: LinkProps & ElementProps) => {
  const router = useRouter();
  return (
    <Link {...props}>
      <StandardLink
        {...(props as any)}
        onClick={(e) => {
          e.preventDefault();
          if (props.href.toString().indexOf("#") != -1) {
            doScrolling(props.href.toString().replace("#", ""), 200);
          } else {
            router.push(props.href, undefined, { scroll: true });
          }
          props.onClick && props.onClick(e);
        }}
      >
        {props.children}
      </StandardLink>
    </Link>
  );
};

export default StyledLink;
