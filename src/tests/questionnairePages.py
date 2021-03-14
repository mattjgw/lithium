from selenium import webdriver
from selenium.webdriver.common.by import By


class outageDefinition:
    def __init__(self,driver):
        self.driver = driver
    
    def verifyPageLoaded(self):
        title = self.driver.find_element(By.XPATH, "//*[contains(text(),'Outage Definition')]")
        
        if not bool(title):
            print("element does not exist")
            return False
        return True

    def clickContinueButton(self):
        self.driver.find_element(By.CSS_SELECTOR,"[testId='continueButton']").click()

    def clickRadioButton(self,value):
        self.driver.find_element(By.CSS_SELECTOR,"[value='%s']" % value).click()


class housingInfo:
    def __init__(self,driver):
        self.driver = driver
    
    def verifyPageLoaded(self):
        title = self.driver.find_element(By.XPATH, "//*[contains(text(),'Housing Definition')]")
        
        if not bool(title):
            print("element does not exist")
            return False
        return True

    def clickContinueButton(self):
        self.driver.find_element(By.CSS_SELECTOR,"[testId='continueButton']").click()

    def clickBackButton(self):
        self.driver.find_element(By.CSS_SELECTOR,"[testId='backButton']").click()
    
    def selectProvince(self,province):
        self.driver.find_element(By.CSS_SELECTOR,"@age-native-simple").click()
        self.driver.find_element(By.XPATH, "//*[contains(text(),'%s')]" % province).click()

