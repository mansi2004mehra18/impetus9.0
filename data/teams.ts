export interface TeamMember {
  name: string;
  phone: string;
  post: string;
  imgname: string;
  insta: string;
  link: string;
}

export interface Team {
  teamName: string;
  slug: string;
  members: TeamMember[];
}

export interface TeamsData {
  teams: Team[];
}

export const teamsData: TeamsData = {
  teams: [
    {
      teamName: "Coordinators",
      slug: "coordinators",
      members: [
        {
          name: "Amartya Singh",
          phone: "+91 7357769918",
          post: "Coordinator",
          imgname: "team/AMARTYA_SINGH.jpg",
          insta: "https://www.instagram.com/amartya_singh.29",
          link: "https://www.linkedin.com/in/Amartya Singh"
        },
        {
          name: "Janhvi Singh",
          phone: "+91 8318035176",
          post: "Coordinator",
          imgname: "team/JANHVI_SINGH.jpg",
          insta: "https://www.instagram.com/raghuvanshi_janhvi",
          link: "https://www.linkedin.com/in/janhvi-singh-858600239"
        },
        {
          name: "Abhishek Bhatt",
          phone: "+91 6395399362",
          post: "Joint Coordinator",
          imgname: "team/abhishekIMG.jpeg",
          insta: "https://www.instagram.com/abhibhtabhi",
          link: "https://www.linkedin.com/in/abhishek-bhatt-306b28259"
        },
        {
          name: "Varun Gautam",
          phone: "+91 9368145959",
          post: "Joint Coordinator",
          imgname: "team/varunIMG.jpeg",
          insta: "https://www.instagram.com/smile__varun",
          link: "https://in.linkedin.com/in/varun-gautam-1205012a9"
        }
      ]
    },
    {
      teamName: "Finance Team",
      slug: "finance",
      members: [
        {
          name: "Ivan Jacob Thomas",
          phone: "+91 7463884470",
          post: "Head",
          imgname: "team/IVAN_JACOB THOMAS.jpeg",
          insta: "https://www.instagram.com/ivan_jax/",
          link: "https://www.linkedin.com/in/ivan-jacob-thomas-a62b9b239/"
        }
      ]
    },
    {
      teamName: "Event Management Team",
      slug: "events",
      members: [
        {
          name: "Ankush Ghosh",
          phone: "+91 8145326311",
          post: "Head",
          imgname: "team/ANKUSH_GHOSH.jpg",
          insta: "https://www.instagram.com/ag0172003",
          link: "https://www.linkedin.com/in/ankush-ghosh-43b02a255"
        },
        {
          name: "Piyush Pathak",
          phone: "+91 7282809390",
          post: "Head",
          imgname: "team/piyush.jpg",
          insta: "",
          link: "https://www.linkedin.com/in/piyush-pathak-882489241"
        },
        {
          name: "Sayan Mondal",
          phone: "+91 8670297716",
          post: "Head",
          imgname: "team/SAYAN_MONDAL.jpg",
          insta: "https://www.instagram.com/s.o.l.o.n.i.s.t/",
          link: "https://www.linkedin.com/in/sayan-mondal-5016511a0/"
        },
        {
          name: "Siddamalla Harshavardhan",
          phone: "+91 7702497870",
          post: "Head",
          imgname: "team/Siddamalla_Harshavardhan.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Soham Banerjee",
          phone: "+91 8101264621",
          post: "Head",
          imgname: "team/SOHAM_BANERJEE.png",
          insta: "...",
          link: "..."
        },
        {
          name: "Wali Ahad Mallick",
          phone: "+91 7480984908",
          post: "Head",
          imgname: "team/MD_WALI AHAD MALLICK.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Debolina Das",
          phone: "+91 7003574009",
          post: "Executive",
          imgname: "team/deboDas.jpeg",
          insta: "",
          link: ""
        },
        {
          name: "Vizo",
          phone: "+91 8787805856",
          post: "Executive",
          imgname: "team/vizo.jpeg",
          insta: "",
          link: "https://www.linkedin.com/in/diethozo-vizo/"
        },
        {
          name: "Shivansh",
          phone: "+91 8545898275",
          post: "Executive",
          imgname: "team/shivansh.jpeg",
          insta: "",
          link: ""
        },
        {
          name: "Tuhin Mondal",
          phone: "+91 8100969909",
          post: "Executive",
          imgname: "team/tuhin.jpeg",
          insta: "",
          link: "https://www.linkedin.com/in/tmondal3901"
        },
        {
          name: "Harsh Kumar",
          phone: "8240541513",
          post: "Executive",
          imgname: "team/harsh_kumar.jpeg",
          insta: "",
          link: ""
        },
        {
          name: "Rajdeep Sarkar",
          phone: "+91 7980430746",
          post: "Executive",
          imgname: "team/rajdeep.jpeg",
          insta: "...",
          link: "..."
        },
        {
          name: "Debjit Maity",
          phone: "+91 8167025227",
          post: "Executive",
          imgname: "team/debjit.jpeg",
          insta: "",
          link: "..."
        },
        {
          name: "Dibya Jyoti Das",
          phone: "+91 7699249687",
          post: "Executive",
          imgname: "team/divyaJ.jpeg",
          insta: "",
          link: ""
        }
      ]
    },
    {
      teamName: "Web Development Team",
      slug: "web-dev",
      members: [
        {
          name: "Utsab Kundu",
          phone: "+91 8100460390",
          post: "Head",
          imgname: "team/utsab.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Abhishek Kumar",
          phone: "+91 9959387572",
          post: "Executive",
          imgname: "team/abhishek.jpg",
          insta: "",
          link: ""
        }
      ]
    },
    {
      teamName: "Content & Design Team",
      slug: "design",
      members: [
        {
          name: "Anurag Chakraborty",
          phone: "+91 6290781657",
          post: "Head",
          imgname: "team/Anurag.jpg",
          insta: "...",
          link: "#"
        },
        {
          name: "Kanishka Dutta",
          phone: "+91 9874168331",
          post: "Head",
          imgname: "team/Kanishka.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Piyal Bhowmick",
          phone: "+91 8910276639",
          post: "Head",
          imgname: "team/PIYAL_BHOWMICK.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Kishore Pal",
          phone: "+91 9641435117",
          post: "Executive",
          imgname: "team/Kishore_pt.jpeg",
          insta: "...",
          link: "..."
        }
      ]
    },
    {
      teamName: "Publicity Team",
      slug: "publicity",
      members: [
        {
          name: "Ajay kumar khandelwal",
          phone: "+91 7792062842",
          post: "Head",
          imgname: "team/AJAY_KUMAR KHANDELWAL.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Shamiksha Kumari",
          phone: "+91 9749520498",
          post: "Head",
          imgname: "team/Shamiksha.jpg",
          insta: "...",
          link: "..."
        }
      ]
    },
    {
      teamName: "Sponsorship Team",
      slug: "sponsorship",
      members: [
        {
          name: "Ketan Masurkar",
          phone: "+91 8788330638",
          post: "Head",
          imgname: "team/ketan.jpg",
          insta: "",
          link: "..."
        },
        {
          name: "Rohit Pal",
          phone: "+91 8319629245",
          post: "Head",
          imgname: "team/ROHIT_PAL.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Akshat Gupta",
          phone: "+91 7548071485",
          post: "Executive",
          imgname: "team/akshat_spt.jpeg",
          insta: "",
          link: ""
        },
        {
          name: "Akash",
          phone: "+91 9444265824",
          post: "Executive",
          imgname: "team/akashS.jpeg",
          insta: "",
          link: ""
        },
        {
          name: "Pratik",
          phone: "+91 8956850808",
          post: "Executive",
          imgname: "team/pratik.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Ritesh Premchand Gupta",
          phone: "+91 8291164387",
          post: "Executive",
          imgname: "team/ritesGupta.jpeg",
          insta: "",
          link: ""
        }
      ]
    },
    {
      teamName: "Travel & Logistics Team",
      slug: "logistics",
      members: [
        {
          name: "Arunava Pal",
          phone: "+91 9874269145",
          post: "Head",
          imgname: "team/Arunava.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Subhankar Mondal",
          phone: "+91 7863906928",
          post: "Head",
          imgname: "team/Subhankar.jpg",
          insta: "...",
          link: "..."
        }
      ]
    },
    {
      teamName: "Industry Academia Meet Team",
      slug: "iam",
      members: [
        {
          name: "Ivan Jacob Thomas",
          phone: "+91 7463884470",
          post: "Head",
          imgname: "team/IVAN_JACOB THOMAS.jpeg",
          insta: "...",
          link: "..."
        },
        {
          name: "Soumyadeep Dey",
          phone: "+91 9800054616",
          post: "Head",
          imgname: "team/SOUMYADEEP_DEY.png",
          insta: "...",
          link: "..."
        }
      ]
    },
    {
      teamName: "Videography & Photography Team",
      slug: "media",
      members: [
        {
          name: "Sabavath Akash Ram Naik",
          phone: "+91 7815812686",
          post: "Head",
          imgname: "team/Akash_Ram.jpg",
          insta: "...",
          link: "..."
        },
        {
          name: "Sai Venkat Rao",
          phone: "+91 8367663100",
          post: "Head",
          imgname: "team/sai_venkat.jpg",
          insta: "...",
          link: "..."
        }
      ]
    }
  ]
};
