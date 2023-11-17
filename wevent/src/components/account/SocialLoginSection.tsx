const SocialLoginSection = () => {
  return (
    <section className={`w-full flex flex-col items-center`}>
      <div className={`flex gap-3 justify-center items-center w-full mb-8`}>
        <hr className={`flex-grow border-black`}></hr>
        <span>또는</span>
        <hr className={`flex-grow border-black`}></hr>
      </div>
      <div className={`mb-4`}>다른 서비스로 로그인</div>
      <div className={`flex gap-9`}>
        <div>kakao</div>
        <div>google</div>
      </div>
    </section>
  );
};

export default SocialLoginSection;
