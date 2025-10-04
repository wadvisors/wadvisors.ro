import { useState } from "react";
import { useEntityQuery, useApi } from "bknd/client";
import Button from "./Button";

export default function Newsletter({}) {
  const [state, setState] = useState({});
  const api = useApi();
  // const { create, ...q } = useEntityQuery(
  //   "subscribers",
  //   "",
  //   {},
  //   {
  //     revalidateOnMutate: false,
  //   },
  // );

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await api.data.createOne("subscribers", state);

    console.log("dataaaaa", data);
  };

  return (
    <section className="grid gap-4 w-full bg-white py-4 mt-12">
      {/*<pre>{JSON.stringify(q, null, 2)}</pre>*/}
      <form
        onChange={handleOnChange}
        className="site-container flex flex-row gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          className="py-2 px-4 rounded-xl bg-black/5 dark:bg-white/10"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          className="py-2 px-4 rounded-xl bg-black/5 dark:bg-white/10"
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          className="py-2 px-4 rounded-xl bg-black/5 dark:bg-white/10"
        />
        <input type="hidden" name="action" value="add" />
        <Button type="submit">Subscribe</Button>
      </form>
    </section>
  );
}
