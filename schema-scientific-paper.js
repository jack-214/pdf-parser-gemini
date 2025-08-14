import { Type } from "@google/genai";

export const schemaScientificPaper = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "Title of the scientific paper" },
    authors: {
      type: Type.ARRAY,
      items: { type: Type.STRING, description: "Name of the author" },
    },
    field: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "Field(s) of study the paper belongs to",
      },
    },
    abstract: { type: Type.STRING, description: "Abstract of the paper" },
    introduction: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "Key information within the introduction of the paper",
      },
    },
    methods: {
      type: Type.OBJECT,
      properties: {
        methodName: {
          type: Type.STRING,
          description: "Name of the single method",
        },
        methodDescription: {
          type: Type.STRING,
          description: "One sentence describing this single method",
        },
      },
    },
    results: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "Key information within the results section of the paper",
      },
    },
    data: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          resultDescription: {
            type: Type.STRING,
            description: "Description of the result",
          },
          resultData: {
            type: Type.NUMBER,
            description: "Numerical data without units from the result",
          },
          dataUnits: {
            type: Type.STRING,
            description: "Units of measurement for the data",
          },
        },
        required: ["resultDescription", "resultData", "dataUnits"],
      },
    },
    discussion: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "Description of the discussion point",
      },
    },
    conclusions: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "Description of the conclusion",
      },
    },
    references: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "Reference citation",
      },
    },
    keywords: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "Keyword related to the paper",
      },
    },
    publicationDate: {
      type: Type.STRING,
      format: "date-time",
      description: "Publication date of the paper",
    },
    journal: {
      type: Type.STRING,
      description: "Journal where the paper is published",
    },
    doi: {
      type: Type.STRING,
      description: "Digital Object Identifier (DOI) of the paper",
    },
    funding: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "Funding institution or source for the research",
      },
    },
    impact: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description:
          "Potential for commercialisation or impact of the research",
      },
    },
  },
  required: [
    "title",
    "authors",
    "field",
    "abstract",
    "introduction",
    "methods",
    "results",
    "discussion",
    "conclusions",
    "references",
    "keywords",
    "publicationDate",
    "journal",
    "doi",
  ],
};
