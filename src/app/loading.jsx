import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <ImSpinner9 size={20} className="animate-spin" />
    </div>
  )
}

export default Loading