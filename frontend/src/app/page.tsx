"use client";
import { useQuery } from "@apollo/client";
import client, { gql } from "../../apollo-client";

const GET_RESTAURANTS = gql`
  query ExampleQuery {
    restaurants {
      Description
      Name
      documentId
    }
  }
`;

type Restaurant = {
  Description: string;
  Name: string;
  documentId: string;
};

export default function Home() {
  const { loading, error, data } = useQuery(GET_RESTAURANTS, { client });
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;
  return (
    <div>
      <h1>Список ресторанов</h1>
      <ul>
        {data.restaurants.map((restaurant: Restaurant) => (
          <li key={restaurant.documentId}>
            <h2>{restaurant.Name}</h2>
            <p>{restaurant.Description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
