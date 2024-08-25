import arrowDown from '../assets/images/arrowDown.svg';


const DropdownButton = () => {
  return (
    <div className="w-[16px] h-[16px] flex items-center justify-center rounded-[4px] bg-[radial-gradient(106.76%_124.95%_at_77.08%_-35.83%,_#3D4164_32.6%,_#353950_100%)] border border-1 border-[#494B5E]">
      <img 
        className="h-[4px]" 
        src={arrowDown} 
        alt="Dropdown Arrow" />
    </div>
  )
}

export default DropdownButton