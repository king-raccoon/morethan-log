// import styled from "@emotion/styled"
// import React from "react"
// import NotionRenderer from "../components/NotionRenderer"

// type Props = {}

// const PageDetail: React.FC<Props> = () => {
//   const data = usePostQuery()

//   if (!data) return null
//   return (
//     <StyledWrapper>
//       <NotionRenderer recordMap={data.recordMap} />
//     </StyledWrapper>
//   )
// }

// export default PageDetail

// const StyledWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 56rem;
// `

import styled from "@emotion/styled"
import React from "react"
import NotionRenderer from "../components/NotionRenderer"

interface Props {
  recordMap: any
}

const PageDetail: React.FC<Props> = ({ recordMap }) => {
  return (
    <StyledWrapper>
      <NotionRenderer recordMap={recordMap} />
    </StyledWrapper>
  )
}

export default PageDetail

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`
