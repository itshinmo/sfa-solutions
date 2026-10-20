import type { Namespace } from "@/i18n/resources";

export type BlogContentNamespace = Extract<Namespace, `blog-${string}`>;

export type BlogTemplate = "reference" | "narrative" | "simple";

export type Blog = {
  id: string;
  thumbnail: string;
  contentNamespace: BlogContentNamespace;
  template: BlogTemplate;
  images?: Partial<Record<NarrativeArticleImage, string>>;
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

export type SimpleArticleSection = {
  title: string;
  paragraphs: string[];
};

export type SimpleArticleContent = {
  title: string;
  description: string;
  intro: string[];
  sections: SimpleArticleSection[];
};
