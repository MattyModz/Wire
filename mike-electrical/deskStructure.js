import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";
import SeoPane from "sanity-plugin-seo-pane";
import resolveProductionUrl from "./resolveProductionUrl";

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
        reload: { button: true },
      })
      .title("Preview"),
  ]);
};

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Post")
            .items([
              S.listItem()
                .title("Post")
                .schemaType("post")
                .child(S.documentTypeList("post").title("Post")),
              S.listItem()
                .title("Author")
                .schemaType("author")
                .child(S.documentTypeList("author").title("Author")),
              S.listItem()
                .title("Category")
                .schemaType("category")
                .child(S.documentTypeList("category").title("Category")),
            ])
        ),

      S.listItem()
        .title("Services")
        .child(
          S.list()
            .title("services")
            .items([
              S.listItem()
                .title("Commercial")
                .schemaType("planning")
                .child(S.documentTypeList("planning").title("commercial")),
              S.listItem()
                .title("Industrial")
                .schemaType("industrial")
                .child(S.documentTypeList("industrial").title("industrial")),
              S.listItem()
                .title("Domestic")
                .schemaType("domestic")
                .child(S.documentTypeList("domestic").title("domestic")),
            ])
        ),
      S.listItem()
        .title("Other")
        .child(
          S.list()
            .title("Other")
            .items([
              S.listItem()
                .title("Reviews")
                .schemaType("reviews")
                .child(S.documentTypeList("reviews").title("reviews")),
              S.listItem()
                .title("faq's")
                .schemaType("faq")
                .child(S.documentTypeList("faq").title("faq")),
              ,
            ])
        ),

      //   S.divider(),
      //   S.listItem()
      //     .title("Policy Pages")
      //     .schemaType("policy")
      //     .child(S.documentTypeList("policy").title("Policy")),
      //   S.divider(),
      //   S.listItem()
      //     .title("FAQ's")
      //     .schemaType("faq")
      //     .child(S.documentTypeList("faq").title("Faq")),
    ]);

//     S.view
//       .component(SeoPane)
//       .options({
//         // Retrieve the keywords and synonyms at the given dot-notated strings
//         keywords: `seo.keywords`,
//         synonyms: `seo.synonyms`,
//         url: (doc) => resolveProductionUrl(doc),

//         // Alternatively, specify functions (may be async) to extract values
//         // keywords: doc => doc.seo?.keywords,
//         // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
//         // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
//       })
//       .title("SEO"),
//   ]);
