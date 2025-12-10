import React from "react";
import { 
  Column, 
  Row, 
  Heading, 
  Text, 
  Button, 
  Grid,
  Media, 
  Line, 
  StatusIndicator,
  Badge,
  Tag,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, meta, schema, changelog, roadmap, routes } from "@/resources";
import { formatDate } from "./utils/formatDate";
import { PageList } from "@/product/PageList";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.home.title,
    description: meta.home.description,
    baseURL: baseURL,
    path: meta.home.path,
    image: meta.home.image
  });
}

// Calculate roadmap progress stats
const calculateRoadmapStats = () => {
  let totalTasks = 0;
  let inProgressTasks = 0;
  let completedTasks = 0;
  
  roadmap.forEach(product => {
    product.columns.forEach(column => {
      totalTasks += column.tasks.length;
      
      if (column.title === "In Progress") {
        inProgressTasks += column.tasks.length;
      }
      
      if (column.title === "Done") {
        completedTasks += column.tasks.length;
      }
    });
  });
  
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  return {
    totalTasks,
    inProgressTasks,
    completedTasks,
    progressPercentage
  };
};

const roadmapStats = calculateRoadmapStats();

// Get the latest changelog entry
const latestChangelogEntry = changelog[0];

export default function Home() {
  return (
    <Column maxWidth={56} gap="xl">
      <Schema
        as="webPage"
        title={meta.home.title}
        description={meta.home.description}
        baseURL={baseURL}
        path={meta.home.path}
        author={{
          name: schema.name
        }}
      />
      
      {/* Hero Section */}
      <Column fillWidth gap="l" paddingTop="l">
        <Row fillWidth gap="l">
          <Column maxWidth="xs" gap="12">
          <Badge
              background="overlay"
              paddingLeft="4"
              paddingRight="16"
              paddingY="4"
              border="neutral-alpha-medium"
              href="/get-started"
              vertical="center"
              marginBottom="12"
            >
                <Tag marginRight="12">Docs</Tag>
                <Text
                  variant="label-default-s"
                  onBackground="neutral-weak"
                >
                  Power, Your WHMCS Business
                </Text>
            </Badge>
            <Heading variant="display-strong-s">
              Sapphive Docs
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-xl" marginBottom="20">
              Comprehensive guides and documentation to help you start working with Sapphive products as quickly as possible.
            </Text>
            <Button data-border="rounded" size="s" href="/get-started" variant="secondary" arrowIcon id="get-started">Quick start</Button>
          </Column>
        </Row>
      </Column>

      <Column fillWidth>
        <Column fillWidth>
          <Text 
            variant="display-default-s" 
            onBackground="neutral-strong"
          >
            Products
          </Text>
          <Text
            onBackground="neutral-weak"
            marginTop="8"
          >
            Build you WHMCS Business with Sapphive
          </Text>
        </Column>
        <PageList depth={1} thumbnail={true} marginTop="24" minHeight={14}/>
      </Column>
    </Column>
  );
}
