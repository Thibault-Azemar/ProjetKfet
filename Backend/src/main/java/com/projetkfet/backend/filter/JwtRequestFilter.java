package com.projetkfet.backend.filter;

//@Component
//public class JwtRequestFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private JwtTokenUtil jwtTokenUtil;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
//            throws ServletException, IOException {
//        final String requestUri = request.getRequestURI();
//        if (!requestUri.equals("/user") && !requestUri.equals("/user/add")) {
////            TODO: vérifier le fonctionnement de l'ensemble
//            final String requestTokenHeader = request.getHeader("Authorization");
//            String username = null;
//            Integer id = null;
//            String jwtToken = null;
//
//            if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
//                jwtToken = requestTokenHeader.substring(7);
//                try {
//                    username = jwtTokenUtil.getUsernameFromToken(jwtToken);
//                } catch (IllegalArgumentException e) {
//                    // TODO: handle exception
//                } catch (ExpiredJwtException e) {
//                    // TODO: handle exception
//                }
//            } else {
//                // TODO: handle exception
//            }
//
//            // Vérifie que le token est valide et correspond au nom d'utilisateur récupéré par l'id
//            if (username != null && jwtTokenUtil.validateToken(jwtToken, username)) {
//                chain.doFilter(request, response);
//            } else {
//                response.sendError(HttpStatus.FORBIDDEN.value(), "Forbidden");
//            }
//        } else {
//            chain.doFilter(request, response);
//        }
//    }
//}
