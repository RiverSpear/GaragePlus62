import { useState, useEffect } from "react";
import contentfulClient from "../contentfulClient.js";

const useFetchArticles = (contentType = "aboutUs", slug = null, hasContentOrder = false) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const query = { content_type: contentType };
                if (slug) query["fields.slug"] = slug;
                if (hasContentOrder) query.order = "fields.contentOrder"; // Tambahkan order jika ada

                const response = await contentfulClient.getEntries(query);
                setArticles(slug ? response.items[0] : response.items);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, [contentType, slug, hasContentOrder]);

    return { articles, error, isLoading };
};

export default useFetchArticles;