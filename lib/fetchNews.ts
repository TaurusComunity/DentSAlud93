// lib/fetchNews.ts

export interface NewsItem {
  title: string;
  description: string;
  url: string;
  image: string;
  published_at: string;
}

export async function fetchDentalNews(): Promise<NewsItem[]> {
  try {
    // Refinamos la búsqueda para que solo traiga noticias relacionadas con odontología
    const response = await fetch(`https://newsapi.org/v2/everything?q="odontología" OR "salud dental" OR "tratamientos dentales" OR "dentista"&language=es&apiKey=f244938bb21541b2a1afb021359dce84`);

    // Verifica si la respuesta es correcta
    if (!response.ok) {
      console.error('Failed to fetch data from the API:', response.status, response.statusText);
      throw new Error(`Error fetching news - Status: ${response.status}`);
    }

    // Convierte la respuesta a JSON
    const data = await response.json();
    console.log("Data fetched successfully:", data);

    // Si hay artículos, mapea los datos para que el formato sea consistente con NewsItem
    if (data.articles && data.articles.length > 0) {
      return data.articles.map((news: any) => ({
        title: news.title,
        description: news.description,
        url: news.url,
        image: news.urlToImage || 'https://via.placeholder.com/150', // Imagen por defecto si no hay imagen
        published_at: news.publishedAt,
      }));
    } else {
      console.warn("No news data found.");
      return [];
    }
  } catch (error) {
    console.error('Error fetching dental news:', error);
    return [];
  }
}
