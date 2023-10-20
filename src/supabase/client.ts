import { createClient } from "@supabase/supabase-js";
import { env } from "~/env.mjs";

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function upload(logo: string) {
  try {
    const { data } = await supabase.storage
      .from("/companies")
      .upload("logo.png", logo, {
        cacheControl: "3600",
        upsert: false,
      });
    return (
      `https://pexfbuzgoxkernyphnja.supabase.co/storage/v1/object/public/companies/${data?.path}` ??
      ""
    );
  } catch (error) {
    console.log("error upload image to supabase", error);
    return "";
  }
}

export default upload;
