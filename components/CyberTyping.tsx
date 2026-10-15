"use client";

import { useEffect, useState } from "react";

type Role = {
  text: string;
  color: string;
};

interface Props {
  roles: Role[];
}

export default function CyberTyping({ roles }: Props) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex].text;

    const speed = deleting ? 40 : 70;

    const timeout = setTimeout(() => {

      if (!deleting) {

        setDisplayText(current.substring(0, displayText.length + 1));

        if (displayText === current) {

          setTimeout(() => setDeleting(true), 1200);

        }

      } else {

        setDisplayText(current.substring(0, displayText.length - 1));

        if (displayText === "") {

          setDeleting(false);

          setRoleIndex((prev) => (prev + 1) % roles.length);

        }

      }

    }, speed);

    return () => clearTimeout(timeout);

  }, [displayText, deleting, roleIndex, roles]);

  return (

<span
className={`
${roles[roleIndex].color}
font-semibold
tracking-wide
drop-shadow-[0_0_8px_currentColor]
`}
>

{displayText}

<span className="animate-pulse text-green-400">
|
</span>

</span>

);
}