export async function post(url: string, body: string) {
  let status = 0;
  let data = {};
  try {
    const response = await fetch(url, {
      body,
      method: "post",
      headers: { "content-type": "application/json" },
    });

    status = response.status;

    if (response.ok) {
      data = await response.json();
    }
  } catch (err) {
    console.error(err);
  }
  return { status, data };
}
