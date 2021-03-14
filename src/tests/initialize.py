from selenium import webdriver
from selenium.webdriver.chrome.options import Options


def setup(binary_location = "C:/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"):
    options = Options()
    options.binary_location = binary_location
    driver = webdriver.Chrome(chrome_options=options, executable_path="C:/Users/isaac/Code/chromedriver_win321/chromedriver.exe")
    #driver = webdriver.Chrome("C:/Users/isaac/Code/chromedriver_win32/chromedriver.exe")
    driver.get('http://localhost:3000/lithium#/') #https://mattjgw.github.io/lithium/#/
    return driver

def teardown(driver):
    driver.quit()
    print("finished")