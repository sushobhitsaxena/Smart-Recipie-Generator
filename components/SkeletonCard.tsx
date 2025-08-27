export default function SkeletonCard() {
  return (
    <div className="card space-y-3 skeleton">
      <div className="h-5 w-2/3 rounded-md bg-transparent"></div>
      <div className="h-4 w-1/2 rounded-md bg-transparent"></div>
      <div className="h-24 rounded-md bg-transparent"></div>
      <div className="h-4 w-3/5 rounded-md bg-transparent"></div>
    </div>
  )
}
