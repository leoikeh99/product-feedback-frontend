import React, { useContext } from "react";
import * as S from "../styles/SidebarStyles";
import * as W from "../styles/widgets";
import * as B from "../styles/widgets/Buttons";
import Link from "next/link";
import AuthContext from "../context/AuthContext";

export default function SideBar({ activeTag, setActiveTag, data }) {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const { user, logout } = useContext(AuthContext);

  return (
    <S.Container id="sidebar">
      <div>
        <S.TopCard>
          <p className="main-text">Frontend Mentor</p>
          <p>Feedback Board</p>
        </S.TopCard>

        <S.ProfileCard small>
          {user ? (
            <>
              <img
                src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${user.username}`}
                alt=""
              />
              <div>
                <p>{user.username}</p>
                <i className="fa-solid fa-power-off" onClick={() => logout()}>
                  {" "}
                  Logout
                </i>
              </div>
            </>
          ) : (
            <Link href="/auth/login">
              <B.ButtonLink>Login {">"}</B.ButtonLink>
            </Link>
          )}
        </S.ProfileCard>
      </div>
      <S.Card>
        <S.Tags>
          {tags.map((tag) => (
            <W.Tag
              key={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </W.Tag>
          ))}
        </S.Tags>
      </S.Card>
      <S.Card>
        <W.SpaceOut>
          <p className="title">Roadmap</p>
          <Link href="/roadmap">
            <B.ButtonLink>View</B.ButtonLink>
          </Link>
        </W.SpaceOut>
        <ul>
          <li>
            <W.Flex gap={16}>
              <S.Dot bg="#F49F85" /> <p className="text">Planned</p>
            </W.Flex>
            <p className="text-bold">{data.planned}</p>
          </li>
          <li>
            <W.Flex gap={16}>
              <S.Dot bg="#AD1FEA" /> <p className="text">In-Progress</p>
            </W.Flex>
            <p className="text-bold">{data.inProgress}</p>
          </li>
          <li>
            <W.Flex gap={16}>
              <S.Dot bg="#62BCFA" /> <p className="text">Live</p>
            </W.Flex>
            <p className="text-bold">{data.live}</p>
          </li>
        </ul>
      </S.Card>
      <S.ProfileCard>
        {user ? (
          <>
            <img
              src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${user.username}`}
              alt=""
            />
            <div>
              <p>{user.username}</p>
              <i className="fa-solid fa-power-off" onClick={() => logout()}>
                {" "}
                Logout
              </i>
            </div>
          </>
        ) : (
          <Link href="/auth/login">
            <B.ButtonLink>Login {">"}</B.ButtonLink>
          </Link>
        )}
      </S.ProfileCard>
    </S.Container>
  );
}
