// import styled from "@emotion/styled"
// import PageDetail from "./PageDetail"
// import PostDetail from "./PostDetail"

// type Props = {}

// const Detail: React.FC<Props> = () => {
//   const data = usePostQuery()
//   useMermaidEffect()

//   if (!data) return null
//   return (
//     <StyledWrapper data-type={data.type}>
//       {data.type[0] === "Page" && <PageDetail />}
//       {data.type[0] !== "Page" && <PostDetail />}
//     </StyledWrapper>
//   )
// }

// export default Detail

// const StyledWrapper = styled.div`
//   padding: 2rem 0;

//   &[data-type="Paper"] {
//     padding: 40px 0;
//   }
//   /** Reference: https://github.com/chriskempson/tomorrow-theme **/
//   code[class*="language-mermaid"],
//   pre[class*="language-mermaid"] {
//     background-color: ${({ theme }) => theme.colors.gray5};
//   }
// `

import styled from "@emotion/styled"
import usePostQuery from "../../hooks/usePostQuery"
import PageDetail from "./PageDetail"
import PostDetail from "./PostDetail"

const DetailPage = () => {
  const data = usePostQuery()

  if (!data) return null
  const { recordMap, type } = data

  return (
    <StyledWrapper data-type={type}>
      {type[0] === "Page" ? (
        <PageDetail recordMap={recordMap} />
      ) : (
        <PostDetail recordMap={recordMap} />
      )}
    </StyledWrapper>
  )
}

export default DetailPage

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`
