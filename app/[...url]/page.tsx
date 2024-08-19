import ChatWrapper from "../_components/ChatWrapper";
import { ragChat } from "../_lib/rag-chat";
import { redis } from "../_lib/redis";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component)
  );
  return decodedComponents.join("/");
}

export default async function page({ params }: PageProps) {
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] });
  // here we are telling our ragchat : hey go to this sourse which is the url
  //and take the data and put it in your storage (out database)

  //which database??
  //so we go to upstash and create a vector db and we get out tokens and baam it work just fine
  //than we check if our index is done before or not
  //--so we check redis from upstash also and we get token and copy paste to our env than
  // isalready indexed we check if not indexed we want  to do it than we set it as indexed again

  //now we implement session
  const sessionId = "mock-session";
  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    reconstructedUrl
  );
  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });
  }
  await redis.sadd("indexed-urls", reconstructedUrl);
  return <ChatWrapper sessionId={sessionId} />;
}
