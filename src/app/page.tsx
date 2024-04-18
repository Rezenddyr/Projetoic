import styles from "./page.module.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Cadastro() {
  return (
    <main className={styles.main}>
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <div className={styles.title_container}>
            <h2>Criar uma conta</h2>
          </div>
          <div className={styles.row}>
            <div className={`${styles.col_half} ${styles.last}`}>
              <form>
                <div className={styles.input_field}>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    //required=""
                  />
                </div>
                <div className={styles.input_field}>
                  <span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                  <input
                    type="password"
                    name="phone"
                    placeholder="Senha"
                    //required=""
                  />
                </div>
                <div className={styles.input_field}>
                  <span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                  <input
                    type="password"
                    name="phone"
                    placeholder="Confirme a Senha"
                    //required=""
                  />
                </div>
                <div className={styles.input_field}>
                  <span>
                    <i className="fa fa-calendar-days" aria-hidden="true"></i>
                  </span>
                  <input
                    type="date"
                    name="phone"
                    placeholder="Confirme a Senha"
                    //required=""
                  />
                </div>
                <label><input type="checkbox" className={styles.input_field}/> Eu concordo com os Política de Privacidade e Termos</label>
                <input
                  className={styles.button}
                  type="submit"
                  value="Cadastrar"
                />
                <div
                  className={`${styles.row} ${styles.clearfix} ${styles.bottom_row}`}
                >
                  <div className={styles.text_cada}>Já tem uma conta?</div>
                </div>
                <div className={`${styles.inscreverse}`}>
                  <a href="/cadastro.tsx">Fazer Login</a>
                </div>
              </form>
            </div>
            <div className={styles.col_half}>
              <div className={styles.title_container}>
                <h3>Ou você também pode</h3>
              </div>
              <div className={`${styles.social_btn} ${styles.fb}`}>
                <a href="#">
                  <span>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                  Cadastrar usando Facebook
                </a>
              </div>
              <div className={`${styles.social_btn} ${styles.tw}`}>
                <a href="#">
                  <span>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                  Cadastrar usando Twitter
                </a>
              </div>
              <div className={`${styles.social_btn} ${styles.gplus}`}>
                <a href="#">
                  <span>
                    <i className="fa fa-google" aria-hidden="true"></i>
                  </span>
                  Cadastrar usando Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
