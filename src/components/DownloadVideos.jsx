import React from "react";
import styled from "styled-components";
import ImageDownloader from "../assets/images/youtube-image-comp.svg";

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 90vh;
`;

export const FormContainer = styled.div`
	background-image: url(${ImageDownloader});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
`;

const DownloadVideos = () => {
	return (
		<PageContainer>
			<FormContainer>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus atque, nobis ratione magnam voluptatibus praesentium recusandae eius
				vero ab ipsam mollitia quas illo sapiente iste, molestiae necessitatibus asperiores! Maxime dignissimos in perspiciatis sapiente
				pariatur quia porro veniam, velit expedita tenetur delectus nemo error aliquam accusantium architecto corporis consectetur! Deserunt
				atque, non cumque illo officia perferendis. Sunt ratione dolorum exercitationem autem nisi ipsam consectetur harum? A magnam nostrum
				fuga? Adipisci, illum delectus accusantium ratione at corporis, reprehenderit a qui dolor, fugiat totam! Enim amet officiis culpa ea
				hic deleniti, ab voluptatum soluta quasi fuga possimus nihil. Repudiandae nulla, consequatur facere dolores aperiam nam? Laborum
				nesciunt, veritatis est sunt velit, consectetur unde inventore ea animi dignissimos id eligendi quas. Debitis distinctio error
				eligendi, possimus, ipsum atque iusto fuga vel ea delectus quibusdam itaque facere, neque harum laudantium impedit est mollitia quidem
				veniam dolore! Neque porro alias reiciendis sint iure? Quam, odio! Amet error saepe fugit! Id excepturi iusto praesentium? Nam vel
				eligendi illo corporis voluptatibus deleniti ex animi! Beatae, adipisci vitae hic cupiditate temporibus sunt nam at ullam voluptatibus
				omnis aspernatur neque veritatis veniam tempore similique ut aliquam exercitationem, asperiores et magnam fuga, eius aut harum illum.
				Eos saepe, labore, ipsum harum voluptates optio earum maiores ea deleniti alias obcaecati quae neque quaerat? Quam nihil officia
				eveniet omnis, quia enim veritatis accusantium ipsum nobis facilis, suscipit temporibus. Tempore fugit maiores nobis, blanditiis
				architecto quae asperiores quos, non laboriosam quisquam vitae totam voluptatibus ullam recusandae. Magnam voluptatum sunt similique
				vel ducimus, consectetur labore quod perspiciatis nesciunt quasi ad rem. Fuga perferendis deleniti non ipsa accusamus vel quae fugiat
				tenetur illo possimus voluptatum quo doloremque, eum amet veritatis, nobis optio repellendus. Modi blanditiis beatae suscipit eius
				perspiciatis sed, natus ea, placeat, fugiat consequatur mollitia optio nisi sunt sapiente similique incidunt ipsum ex ullam cupiditate
				labore. Accusantium ea quam quasi eligendi atque. In obcaecati tenetur nihil qui unde, deleniti facilis possimus culpa atque magnam
				sequi illo modi consequatur saepe est dolore odit totam! Nisi necessitatibus consectetur voluptatem autem. Voluptatibus ad quidem
				dolores odio accusamus aut fugit illum harum ut earum dolor eos atque sequi, amet animi autem laudantium error cupiditate dicta
				dolorum unde? Delectus non suscipit mollitia, eligendi velit harum odio nisi totam unde laboriosam excepturi? Nulla dolorum veritatis
				explicabo, optio dolores ipsum pariatur eos quia non et corporis voluptas assumenda fugiat. Illum adipisci rem fugiat veritatis ut
				magnam pariatur nesciunt, temporibus deleniti? Nostrum, omnis.
			</FormContainer>
		</PageContainer>
	);
};

export default DownloadVideos;
