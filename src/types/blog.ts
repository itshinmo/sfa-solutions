import type { ComponentType, LazyExoticComponent } from "react";

export type BlogContentNamespace =
  | "blog-soil-texture-triangle"
  | "blog-symphony-of-droplets";

export type Blog = {
  id: string;
  thumbnail: string;
  contentNamespace: BlogContentNamespace;
  Component: LazyExoticComponent<ComponentType>;
};

export type ReferenceArticleSubsection = {
  title: string;
  paragraphs: string[];
  management?: string;
};

export type ReferenceArticleSection = {
  title: string;
  subsections: ReferenceArticleSubsection[];
};

export type ReferenceArticleContent = {
  title: string;
  description: string;
  coverAlt: string;
  intro: string[];
  sections: ReferenceArticleSection[];
};

export type NarrativeArticleImage = "image1" | "image2" | "image3";

export type NarrativeArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "image";
      image: NarrativeArticleImage;
      alt: string;
    };

export type NarrativeArticleContent = {
  title: string;
  description: string;
  intro: string[];
  blocks: NarrativeArticleBlock[];
};
