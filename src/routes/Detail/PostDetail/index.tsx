// import styled from "@emotion/styled"
// import React from "react"
// import NotionRenderer from "../components/NotionRenderer"

// type Props = {}

// const PostDetail: React.FC<Props> = () => {
//   const data = usePostQuery()

//   if (!data) return null

//   const category = (data.category && data.category?.[0]) || undefined

//   return (
//     <StyledWrapper>
//       <article>
//         {category && (
//           <div css={{ marginBottom: "0.5rem" }}>
//             <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
//               {category}
//             </Category>
//           </div>
//         )}
//         {data.type[0] === "Post" && <PostHeader data={data} />}
//         <div>
//           <NotionRenderer recordMap={data.recordMap} />
//         </div>
//         {data.type[0] === "Post" && (
//           <>
//             <PostFooter />
//             <CommentBox data={data} />
//           </>
//         )}
//       </article>
//     </StyledWrapper>
//   )
// }

// export default PostDetail

// const StyledWrapper = styled.div`
//   padding-left: 1.5rem;
//   padding-right: 1.5rem;
//   padding-top: 3rem;
//   padding-bottom: 3rem;
//   border-radius: 1.5rem;
//   max-width: 56rem;
//   background-color: ${({ theme }) =>
//     theme.scheme === "light" ? "white" : theme.colors.gray4};
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   margin: 0 auto;
//   > article {
//     margin: 0 auto;
//     max-width: 42rem;
//   }
// `

import styled from "@emotion/styled"
import React from "react"
import NotionRenderer from "../components/NotionRenderer"
import PostFooter from "./PostFooter"

interface Props {
  recordMap: any
}

const PostDetail: React.FC<Props> = ({ recordMap }) => {
  return (
    <Wrapper>
      <NotionRenderer recordMap={recordMap} />
      <PostFooter />
    </Wrapper>
  )
}

export default PostDetail

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`
