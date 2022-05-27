import React from "react";
import team1 from '../components/images/team1-azwar.png';
import team2 from '../components/images/team2-dilla.png';
import team3 from '../components/images/team3-salam.png';
import team4 from '../components/images/team4-fadhil.jpg';
import team5 from '../components/images/team5-kolifah.png';
import team6 from '../components/images/team6-maxim.jpg';

function About(){
    return(
        <div id='about'>
            <div className="about-header">
                <h1 class="mb-3">Our Team</h1>
                <h3 class="deskripsi">You can relay on our amazing features list and also our customer services</h3>
            </div>

            <div class='about-profiles'>
                <div class="profile-item">
                    <img src={team1} alt='azwar' class="profile-img"/>
                    <h2 class="user-name">Azwar {"\n"} Anas</h2>
                    <h3 class="user-path">Mobile Development</h3>
                    <p>Universitas Negri Makassar</p>
                </div>
                <div class="profile-item">
                    <img src={team2} alt='dilla' class="profile-img"/>
                    <h2 class="user-name">Hamdillah {"\n"} Deslawati</h2>
                    <h3 class="user-path">Mobile Development</h3>
                    <p>Politeknik Negeri Ujung Pandang</p>
                </div>
                <div class="profile-item">
                    <img src={team3} alt='salam' class="profile-img"/>
                    <h2 class="user-name">Andi Abdul {"\n"} Salam</h2>
                    <h3 class="user-path">Cloud Computing</h3>
                    <p>Politeknika Elektro Surabaya</p>
                </div>
                <div class="profile-item">
                    <img src={team4} alt='fadhil' class="profile-img"/>
                    <h2 class="user-name">Fadhilah Winarno</h2>
                    <h3 class="user-path">Cloud Computing</h3>
                    <p>Universitas Udayana</p>
                </div>
                <div class="profile-item">
                    <img src={team5} alt='kolifah' class="profile-img"/>
                    <h2 class="user-name">Nurul Nur {'\n'} Kholifah</h2>
                    <h3 class="user-path">Machine Learning</h3>
                    <p>Universitas Hasanuddin</p>
                </div>
                <div class="profile-item">
                    <img src={team6} alt='maxim' class="profile-img"/>
                    <h2 class="user-name">Maxi Milian Cristoporus</h2>
                    <h3 class="user-path">Machine Learning</h3>
                    <p>Universitas Hasanuddin</p>
                </div>
            </div>
        </div>
    )
}   

export default About;