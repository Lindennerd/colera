import { createClient } from "@supabase/supabase-js";
import { env } from "~/env.mjs";

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function upload(logo: File, id: number) {
  try {
    const { data } = await supabase.storage
      .from("/companies")
      .upload(`logo_${id}.png`, logo, {
        cacheControl: "3600",
        upsert: false,
      });
    return getPublicPath(data!.path) ?? "";
  } catch (error) {
    console.log("error upload image to supabase", error);
    return "";
  }
}

function getPublicPath(file: string) {
  const { data } = supabase.storage.from("/companies").getPublicUrl(file);
  return data.publicUrl ?? "";
}

export { upload };
