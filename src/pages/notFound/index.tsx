const NotFound = () => {
  return (
    <>
      <div style={{ maxWidth: "300px", textAlign: "center", margin: "0 auto" }}>
        <img
          style={{ display: "inline-block", width: "100%", height: "auto" }}
          src='https://mobilekit.bragherstudio.com/view29/assets/img/sample/photo/vector6.png'
          alt='alt'
        />
        <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>نیست</div>
        <div>شما دنبال چی هستی؟</div>

        {/* <div class="fixed-footer">
                <div class="row">
                    <div class="col-12">
                        <a href="app-pages.html" class="btn btn-primary btn-lg btn-block">Go Back</a>
                    </div>
                </div>
            </div> */}
      </div>
    </>
  );
};

export default NotFound;
