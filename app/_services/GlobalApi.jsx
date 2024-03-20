import { gql, request } from "graphql-request";

const protectedKeyWord = process.env.NEXT_PUBLIC_MASTER_URL_KEY;

// const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clts7lty70ddd0iurjaewtut5/master"

const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${protectedKeyWord}/master`;

console.log(MASTER_URL);

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default getCategory;

export const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        email
        images {
          url
        }
        name
        id
        about
        adress
        contactPerson
        category {
          id
          name
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getBusinessByCategory = async (category) => {
  const query =
    gql`
    query MyQuery {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        about
        adress
        category {
          name
          id
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getBusinessByID = async (id) => {
  const query = gql`
    query MyQuery {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        about
        adress
        category {
          name
          id
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
