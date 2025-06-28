export default function shop({ params }) {
  return (
    <div>
      <h1>
        shop details data: {params.slug[0]} / {params.slug[1]}
      </h1>
    </div>
  );
}
