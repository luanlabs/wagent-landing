interface TeamMemberProps {
  image: string;
  name: string;
  bio: string;
}

const TeamMember = ({ image, name, bio }: TeamMemberProps) => {
  return (
    <div className="relative w-full">
      <div className="bg-[#262C2640] rounded-[20px] border border-1 border-[#FFFFFF17] h-[282px] max-w-[324px] w-[324px] mobile:w-[280px] mobile:h-[240px]"></div>
      <img
        src={image}
        alt={name}
        draggable={false}
        className="absolute top-4 left-4 right-4  rounded-[20px] object-cover mobile:max-w-[250px]"
      />
      <div className="mt-[41px] space-y-[2px] pl-4">
        <p className="text-white text-[20px]">{name}</p>
        <p className="text-white opacity-[0.4] text-base">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
