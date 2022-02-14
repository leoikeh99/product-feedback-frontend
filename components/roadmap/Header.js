import React from "react";
import { HeaderCover } from "../../styles/RoadmapStyles";
import { Back, Button } from "../../styles/widgets/Buttons";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderCover>
      <div>
        <Link href="/">
          <Back light>
            <img src="/assets/shared/icon-arrow-left-light.svg" alt="" />
            Go back
          </Back>
        </Link>
        <h3 className="title">Roadmap</h3>
      </div>
      <Link href="/feedback/add?from=roadmap">
        <Button bg="purple">+ Add Feedback</Button>
      </Link>
    </HeaderCover>
  );
}
