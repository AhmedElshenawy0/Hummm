import gql from "graphql-tag";

// Get All Foods

export const ALL_FOOD_QUERY = gql`
  query {
    Article(filter: { type: { _contains: "food" } }) {
      id
      video
      date_created
      user_created {
        first_name
        last_name
      }
      date_updated
      user_updated {
        first_name
        last_name
      }
      translations {
        title
        content
        cover {
          id
        }
      }
      category {
        translations(
          filter: { languages_code: { name: { _contains: "Arabic" } } }
        ) {
          title
          cover {
            id
          }
        }
      }
    }
  }
`;
// Get Limited Foods
export const LIMITED_FOOD_QUERY = gql`
  query {
    Article(limit: 8, filter: { type: { _contains: "food" } }) {
      id
      video
      date_created
      user_created {
        first_name
        last_name
      }
      date_updated
      user_updated {
        first_name
        last_name
      }
      translations {
        title
        content
        cover {
          id
        }
      }
      category {
        translations(
          filter: { languages_code: { name: { _contains: "Arabic" } } }
        ) {
          title
        }
      }
    }
  }
`;
// Get Limited Foods
export const LIMITED_PLAYER_FOOD_QUERY = gql`
  query {
    Article(limit: 4, filter: { type: { _contains: "food" } }) {
      id
      video
      date_created
      user_created {
        first_name
        last_name
      }
      date_updated
      user_updated {
        first_name
        last_name
      }
      translations {
        title
        content
        cover {
          id
        }
      }
      category {
        translations(
          filter: { languages_code: { name: { _contains: "Arabic" } } }
        ) {
          title
        }
      }
    }
  }
`;
// Get Limited Read
export const LIMITED_READ_QUERY = gql`
  query {
    Article(limit: 3, filter: { type: { _contains: "read" } }) {
      id
      translations {
        title
        content
        cover {
          id
        }
      }
      date_updated
      user_updated {
        first_name
        last_name
      }
      category {
        translations {
          title
          description
        }
      }
    }
  }
`;
// Get All Read
export const ALL_READ_QUERY = gql`
  query {
    Article(filter: { type: { _contains: "read" } }) {
      id
      translations {
        title
        content
        cover {
          id
        }
      }
      date_updated
      date_created
      user_updated {
        first_name
        last_name
      }
      category {
        translations {
          title
          description
        }
      }
    }
  }
`;
// Get Single Read
export const SINGLE_READ_QUERY = gql`
  query {
    Article(filter: { type: { _contains: "read" }, id: { _eq: null } }) {
      id
      translations {
        title
        content
        cover {
          id
        }
      }
      date_updated
      user_updated {
        first_name
        last_name
      }
      category {
        translations {
          title
          description
        }
      }
    }
  }
`;
export const LIMITED_SHOW_QUERY = gql`
  query {
    shows {
      id
      all_episodes(limit: 4) {
        id
        video
        shows {
          translations {
            title
            description
          }
        }
        user_updated {
          first_name
          last_name
        }
        date_updated
        translations {
          title
          cover {
            id
            filename_disk
          }
        }
      }
    }
  }
`;
export const ALL_SHOW_QUERY = gql`
  query {
    shows(filter: { status: { _contains: "published" } }) {
      id
      user_created {
        first_name
        last_name
      }
      date_updated
      date_created
      translations {
        title
        description
        cover {
          id
          filename_disk
        }
      }
      all_episodes {
        id
        category {
          translations {
            title
          }
        }
        shows {
          translations {
            id
            title
            description
          }
        }
        date_created
        date_updated

        video
        press_link
        user_created {
          first_name
          last_name
        }
        translations {
          title
          description
          content
          cover {
            id
            filename_disk
          }
        }
      }
    }
  }
`;
export const SINGLE_SHOW_QUERY = gql`
  query ($name: String) {
    shows(filter: { translations: { title: { _contains: $name } } }) {
      id
      user_created {
        first_name
        last_name
      }
      date_created
      translations {
        title
        description
        cover {
          id
          filename_disk
        }
      }
      all_episodes {
        id
        shows {
          translations {
            id
            title
            description
          }
        }
        date_created
        video
        press_link
        user_created {
          first_name
          last_name
        }
        translations {
          title
          description
          content
          cover {
            id
            filename_disk
          }
        }
      }
    }
  }
`;
export const ALL_PRESS_QUERY = gql`
  query {
    Article(filter: { type: { _contains: "press" } }) {
      id
      date_updated
      translations(
        filter: { languages_code: { name: { _contains: "Arabic" } } }
      ) {
        title
        cover {
          id
        }
      }
      press_link
    }
  }
`;
export const LIMITED_PRESS_QUERY = gql`
  query {
    Article(filter: { type: { _contains: "press" } }, limit: 3) {
      id
      date_updated
      translations(
        filter: { languages_code: { name: { _contains: "Arabic" } } }
      ) {
        title
        cover {
          id
        }
      }
      press_link
    }
  }
`;
export const ABOUT_QUERY = gql`
  query {
    homepage {
      translations(
        filter: { languages_code: { name: { _contains: "Arabic" } } }
      ) {
        home_intro_title
        home_about_description
      }
    }
  }
`;

export const ALL_ARTICLE = gql`
  query {
    Article {
      id
      video
      type
      shows {
        translations {
          title
        }
      }
      date_created
      user_created {
        first_name
        last_name
      }
      date_updated
      user_updated {
        first_name
        last_name
      }
      translations {
        title
        content
        cover {
          id
        }
      }
      category {
        translations(
          filter: { languages_code: { name: { _contains: "Arabic" } } }
        ) {
          title
        }
      }
    }
  }
`;
