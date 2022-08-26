import React from "react";
import { H1, H4, Body } from "../Typography";
import {
  Avatar,
  Container,
  ColumnWrapper,
  Username,
  NoBio,
  RowWrapper,
  GitHubInfo,
  GitHubInfoWrapper,
  PersonalLinks,
  Name,
} from "./styles";
import Link from "../Link";
import Icon from "../Icons";

type User = {
  id: number;
  login: string;
  avatar_url: string;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
  name: string | null;
  bio: string | null;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
};

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  const {
    avatar_url,
    login,
    name,
    bio,
    created_at,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = user;
  const joiningDateArray = new Date(created_at).toString().split(" ");
  const joiningDateInfo = `Joined ${joiningDateArray[2]} ${joiningDateArray[1]} ${joiningDateArray[3]}`;

  return (
    <Container>
      <Avatar src={avatar_url} alt={`${login} avatar`} />
      <ColumnWrapper>
        <RowWrapper>
          <Name>{name || login}</Name>
          <Body>{joiningDateInfo}</Body>
        </RowWrapper>
        <Username>@{login}</Username>
        {bio ? <Body>{bio}</Body> : <NoBio>This profile has no bio</NoBio>}
        <GitHubInfoWrapper>
          <GitHubInfo>
            <H4>Repos</H4>
            <H1>{public_repos}</H1>
          </GitHubInfo>
          <GitHubInfo>
            <H4>Followers</H4>
            <H1>{followers}</H1>
          </GitHubInfo>
          <GitHubInfo>
            <H4>Following</H4>
            <H1>{following}</H1>
          </GitHubInfo>
        </GitHubInfoWrapper>
        <RowWrapper>
          <PersonalLinks>
            <div>
              <Icon icon="location" />
              <Body>{location || "Not Available"}</Body>
            </div>
            <Link text={blog || "Not Available"} link={blog} icon="website" />
          </PersonalLinks>
          <PersonalLinks>
            <Link
              text={twitter_username || "Not Available"}
              link={
                twitter_username
                  ? `https://twitter.com/${twitter_username}`
                  : null
              }
              icon="twitter"
            />
            <Link
              text={company || "Not Available"}
              link={company ? `https://github.com/${company.slice(1)}` : null}
              icon="company"
            />
          </PersonalLinks>
        </RowWrapper>
      </ColumnWrapper>
    </Container>
  );
};

export default UserCard;
