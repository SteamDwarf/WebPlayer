import React, { FC, useState } from 'react'

interface IAccordionProps {
    title: string
}

const Accordion:FC<IAccordionProps> = ({title}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div>
        {title}
    </div>
  )
}

export default Accordion