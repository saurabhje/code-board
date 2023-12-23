import supabase from "./../utils/supabase/client";

export default async function SendData() {
  const { data, error } = await supabase
    .from("snippets")
    .insert({
      title: "This is another cpp code",
      content: `<p>multiline code checking if it's possible just checking</p>
                <p>
                    how are you doing man?
                </p`
    })
    .select();
    console.log("success")
}
