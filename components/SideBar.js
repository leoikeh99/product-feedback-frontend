import React from "react";
import * as S from "../styles/SidebarStyles";
import * as W from "../styles/widgets";
import * as B from "../styles/widgets/Buttons";
import Link from "next/link";

export default function SideBar() {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <S.Container>
      <S.TopCard>
        <p className="main-text">Frontend Mentor</p>
        <p>Feedback Board</p>
      </S.TopCard>
      <S.Card>
        <S.Tags>
          {tags.map((tag) => (
            <W.Tag key={tag}>{tag}</W.Tag>
          ))}
        </S.Tags>
      </S.Card>
      <S.Card>
        <W.SpaceOut>
          <p className="title">Roadmap</p>
          <Link href="/">
            <B.ButtonLink>View</B.ButtonLink>
          </Link>
        </W.SpaceOut>
        <ul>
          <li>
            <W.Flex gap={16}>
              <S.Dot bg="#F49F85" /> <p className="text">Planned</p>
            </W.Flex>
            <p className="text-bold">2</p>
          </li>
          <li>
            <W.Flex gap={16}>
              <S.Dot bg="#AD1FEA" /> <p className="text">In-Progress</p>
            </W.Flex>
            <p className="text-bold">3</p>
          </li>
          <li>
            <W.Flex gap={16}>
              <S.Dot bg="#62BCFA" /> <p className="text">Live</p>
            </W.Flex>
            <p className="text-bold">1</p>
          </li>
        </ul>
      </S.Card>
    </S.Container>
  );
}
