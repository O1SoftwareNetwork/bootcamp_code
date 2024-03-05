export default function Home() {
  // A call to the database to GET some topics
  // This will give us an array to loop over
  // 

  return (
    <div>
      <nav>Navigation</nav>
      <div className="border mb-3 rounded w-48 h-48">
        <h1>Topic 1</h1>
        <p>A little bit of information about this topic</p>
      </div>
      <div className="border  mb-3 rounded w-48 h-48">
        <h1>Topic 2</h1>
        <p>A little bit of information about this topic</p>
      </div>
      <div className="border  mb-3 rounded w-48 h-48">
        <h1>Topic 3</h1>
        <p>A little bit of information about this topic</p>
      </div>
    </div>
  );
}
