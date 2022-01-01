import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "f980zcpmf0m0",
    accessToken: "5l6J_HtfcFdShJuUXrmKwDBR0rejdhvgRgEHqv2zb6U",
    host: "preview.contentful.com"
  });

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "author",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getAuthors };
};

export default useContentful;
