interface SkillsType {
  name: string;
  percentage: string;
}
export interface DataType {
  name: string;
  profession: string;
  facebook: string;
  linkedin: string;
  experience: string;
  education:any;
  hobbies: string[];
  skills: SkillsType[];
}
export const resumeData: DataType = {
  name: "muhammad fasih",
  profession: "fullstack developer",
  facebook: "",
  linkedin: "",
  experience:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fugiat, inventore assumenda mollitia recusandae laudantium dolorum, vero placeat, nam et eos quasi molestias veniam. Reiciendis vitae vero explicabo, pariatur assumenda ipsa adipisci excepturi debitis.consectetur adipisicing elit. Animi fugiat, inventore assumenda mollitia recusandae laudantium dolorum, vero placeat",
  education: {
    firstPara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fugiat, inventore assumenda mollitia recusandae laudantium dolorum, vero placeat, nam et eos quasi molestias veniam. Reiciendis vitae vero explicabo, pariatur assumenda ipsa adipisci excepturi debitis.",
    secondPara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fugiat, inventore assumenda mollitia recusandae laudantium dolorum, vero placeat, nam et eos quasi molestias veniam. Reiciendis vitae vero explicabo, pariatur assumenda ipsa adipisci excepturi debitis.",
  },
  hobbies: ["soccer", "coding", "reading", "games"],
  skills: [
    { name: "html", percentage: "80%" },
    { name: "css", percentage: "95%" },
    { name: "typescript", percentage: "95%" },
    { name: "javascript", percentage: "90%" },
    { name: "python", percentage: "80%" },
    { name: "react js", percentage: "85%" },
    { name: "next js", percentage: "80%" },
  ],
};
